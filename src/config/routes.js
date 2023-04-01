
import config from './index'

// API routes for the app
export const ApiRoutes = {
 auth: `${config}'/auth'`,
 user: `${config}'/user'`,
 newsByUser: `${config}'/news/byUser'`,
 news: `${config}'/news'`,
 newsLike: `${config}'/news/like'`,
 searchNews: `${config}'/news/search'`,
}