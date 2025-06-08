export function formatDate(date: Date, pattern = 'YYYY-MM-DD') {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function showToast(title: string, icon: 'success' | 'error' = 'success') {
  uni.showToast({ title, icon })
}
