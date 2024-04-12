export const RegEx = {
  IPv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  IPv6: /^((?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|((?:[0-9a-fA-F]{1,4}:){1,7}:))$/,
  URL: /^(?:https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
};

export function isValidEmailForDomain(email: string, url: string) {
  console.log(url);
  const domain = new URL(url).hostname.toLowerCase();

  console.log(domain);

  const username = email.split("@")[0].toLowerCase();

  return username === domain;
}
