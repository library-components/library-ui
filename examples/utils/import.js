export const importComponents = process.env.NODE_ENV ==  "development" ? file => require('@/views/' + file + '.vue').default :  file => import('@/views/' + file + '.vue')
