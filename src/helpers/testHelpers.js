export function errorCatcher (func, params, error) {
  try {
    func(params)
  } catch (e) {
    return { name: e.name === error.name, message: e.message === error.message }
  }
}
