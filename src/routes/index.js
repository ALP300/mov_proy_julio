import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.render('index', {title: 'Mi primera web hecha en EJS con Node'})
})

router.get('/catalogo', (req, res) => {
  res.render('catalogo', {title: 'Nuestro catálogo'})
})

router.get('/contactanos', (req, res) => {
  res.render('contact', {title: 'Contáctanos'})
})

router.get('/about', (req, res) => {
  res.render('about', {title: 'Sobre Nosotros'})
})

export default router