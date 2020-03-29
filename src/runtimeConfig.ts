function getRuntimeConfig(): RuntimeConfig {
  const runtimeConfigEl = document.getElementById('runtime-config');
  if (runtimeConfigEl == null) {
    return {};
  }
  return JSON.parse(runtimeConfigEl.innerHTML);
}

const runtimeConfig = getRuntimeConfig();

const { ENV, API_HOST } = runtimeConfig;

// Remove Console Log for non-dev environment
console.log = ENV === 'dev' ? console.log : () => {};

console.log('runtime config: ', runtimeConfig);

export { ENV, API_HOST };
