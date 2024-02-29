export function timeSinceDate(date: Date) {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000,
  );
  let interval = seconds / 31536000;

  if (interval > 1) {
    return interval < 2
      ? Math.floor(interval) + " year ago"
      : Math.floor(interval) + " years ago";
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return interval < 2
      ? Math.floor(interval) + " month ago"
      : Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return interval < 2
      ? Math.floor(interval) + " day ago"
      : Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return interval < 2
      ? Math.floor(interval) + " hour ago"
      : Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return interval < 2
      ? Math.floor(interval) + " minute ago"
      : Math.floor(interval) + " minutes ago";
  }
  return "Just now";
}
