export default defineEventHandler((event) => {
  const req = getRequestHeader(event, 'authorization');

  console.log(req);

  return { event: event };
});
