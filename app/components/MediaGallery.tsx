'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

type MediaItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  createdAt: number;
};

export default function MediaGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState<MediaItem[]>([
    {
      id: 'm1',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
      title: 'Strength Session',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4
    },
    {
      id: 'm2',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
      title: 'Mobility Flow',
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2
    },
    {
      id: 'm3',
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Form Check: Squats',
      createdAt: Date.now() - 1000 * 60 * 60 * 6
    }
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newType, setNewType] = useState<'image' | 'video'>('image');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  function handleAddFromUrl() {
    if (!newUrl.trim()) return;
    const id = crypto.randomUUID();
    setItems((prev) => [
      {
        id,
        type: newType,
        src: newUrl.trim(),
        title: newTitle.trim() || (newType === 'image' ? 'New Image' : 'New Video'),
        createdAt: Date.now()
      },
      ...prev
    ]);
    setNewUrl('');
    setNewTitle('');
    setNewType('image');
  }

  function handleAddFromFile(file: File) {
    const objectUrl = URL.createObjectURL(file);
    const isVideo = file.type.startsWith('video/');
    const id = crypto.randomUUID();
    setItems((prev) => [
      {
        id,
        type: isVideo ? 'video' : 'image',
        src: objectUrl,
        title: file.name.replace(/\.[^/.]+$/, ''),
        createdAt: Date.now()
      },
      ...prev
    ]);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    handleAddFromFile(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function startEdit(item: MediaItem) {
    setEditingId(item.id);
    setNewTitle(item.title);
  }

  function saveEdit(id: string) {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, title: newTitle.trim() || it.title } : it))
    );
    setEditingId(null);
    setNewTitle('');
  }

  function cancelEdit() {
    setEditingId(null);
    setNewTitle('');
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 sm:px-10 lg:px-20"
      style={{
        fontFamily: 'var(--font-antonio)',
        fontWeight: 700,
        backgroundColor: '#151515'
      }}
    >
      <div className="mx-auto max-w-7xl text-white">
        <div
          className={`mb-10 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className="mb-4 text-4xl tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Media & Gallery
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Add new media, update titles, and browse the community gallery.
          </p>
        </div>

        <div
          className={`mb-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#2c0d54] via-[#1e0839] to-[#0f0420] p-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label className="mb-2 block text-sm text-gray-300" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                Media URL
              </label>
              <input
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://..."
                className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-white/30"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-300" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                Type
              </label>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value as 'image' | 'video')}
                className="rounded-lg bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-white/30"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddFromUrl}
                className="rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff6b6b] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(251,86,7,0.6)]"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                Add from URL
              </button>
              <label
                className="cursor-pointer rounded-xl border-2 border-white/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                Upload
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-[#2c0d54] via-[#1e0839] to-[#0f0420] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2`}
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 80}ms both` : 'none'
              }}
            >
              <div className="relative h-60 w-full overflow-hidden">
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="p-5">
                {editingId === item.id ? (
                  <div className="flex items-center gap-3">
                    <input
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="flex-1 rounded-lg bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-white/30"
                      style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                    />
                    <button
                      onClick={() => saveEdit(item.id)}
                      className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-black"
                      style={{ fontFamily: 'var(--font-antonio)' }}
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="rounded-lg border border-white/30 px-3 py-2 text-xs font-bold text-white"
                      style={{ fontFamily: 'var(--font-antonio)' }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4
                        className="mb-1 text-lg font-bold text-white"
                        style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-xs text-gray-400"
                        style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                      >
                        {new Date(item.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => startEdit(item)}
                      className="rounded-lg border-2 border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


