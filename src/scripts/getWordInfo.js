import axios from 'axios'

const getWordInfo = async (word) => {
  const url = `http://127.0.0.1:8000/word?word=${word}`
  try {
    const response = await axios.get(url)
    // Извлекаем данные из ответа и возвращаем в виде объекта
    return {
      status: response.status,
      data: response.data
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error)
    // Возвращаем объект с информацией об ошибке
    return {
      error: error.message
    }
  }
}

export default getWordInfo
