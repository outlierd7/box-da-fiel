// Função utilitária para definir o estado de autenticação
export const setAuthenticationState = (
  isLoggedIn: boolean, 
  userData?: { name: string; email: string; cpf: string; phone: string }
) => {
  if (isLoggedIn && userData) {
    localStorage.setItem('boxdafiel_logged_in', 'true')
    localStorage.setItem('boxdafiel_user_data', JSON.stringify(userData))
  } else {
    localStorage.removeItem('boxdafiel_logged_in')
    localStorage.removeItem('boxdafiel_user_data')
  }

  // Disparar evento customizado para notificar componentes
  window.dispatchEvent(new CustomEvent('authStateChanged'))
}

// Função para fazer logout
export const logout = () => {
  setAuthenticationState(false)
}

// Função para verificar se está logado
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('boxdafiel_logged_in') === 'true'
}

// Função para obter dados do usuário
export const getUserData = () => {
  if (typeof window === 'undefined') return null
  const userData = localStorage.getItem('boxdafiel_user_data')
  return userData ? JSON.parse(userData) : null
} 