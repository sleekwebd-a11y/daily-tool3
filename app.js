const moodColors = {
  happy: ['#fef08a', '#fde047', '#fbbf24', '#f59e0b', '#d97706'],
  calm: ['#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2'],
  energetic: ['#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c'],
  sad: ['#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb'],
  motivated: ['#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d']
};

document.getElementById('generate').addEventListener('click', () => {
  const mood = document.getElementById('mood').value;
  const palette = document.getElementById('palette');
  palette.innerHTML = '';
  moodColors[mood].forEach(color => {
    const div = document.createElement('div');
    div.className = 'w-full h-16 rounded-lg shadow-lg';
    div.style.backgroundColor = color;
    div.title = color;
    palette.appendChild(div);
  });
});
