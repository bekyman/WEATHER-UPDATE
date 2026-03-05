const CACHE_TIME = 600000;

export function cacheFetch(key, fetchFn) {
  const cached = localStorage.getItem(key);

  if (cached) {
    const { data, timestamp } = JSON.parse(cached);

    if (Date.now() - timestamp < CACHE_TIME) {
      return Promise.resolve(data);
    }
  }

  return fetchFn().then((data) => {
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        timestamp: Date.now()
      })
    );

    return data;
  });
}
