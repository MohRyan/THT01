import { Router } from "express";
import * as userController from "../controllers/userController";
import * as authController from "../controllers/authController";
import * as productController from "../controllers/productController";
import * as cartController from "../controllers/cartController";

import authentication from "../middlewares/authentication";



const indexRouter = Router();

// userRouter
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Mengambil daftar semua user
 *     responses:
 *       200:
 *         description: Berhasil mengambil daftar user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID dari user
 *                     example: 1
 *                   fullname:
 *                     type: string
 *                     description: Nama user
 *                     example: John Doe
 *                   email:
 *                     type: string
 *                     description: Email user
 *                     example: johndoe@example.com
 *                   role:
 *                     type: string
 *                     description: Peran user
 *                     example: USER
 */

indexRouter.get("/user", authentication, userController.getAllUser);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get a user's information
 *     description: Mengambil data seorang user berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari user yang ingin diambil
 *     responses:
 *       200:
 *         description: Berhasil mengambil data user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID user
 *                   example: 1
 *                 fullname:
 *                   type: string
 *                   description: Nama user
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   description: Email user
 *                   example: johndoe@example.com
 *                 role:
 *                   type: string
 *                   description: Peran user
 *                   example: USER
 *       404:
 *         description: User tidak ditemukan
 *
 *   put:
 *     summary: Update a user's information
 *     description: Memperbarui data user yang sudah ada
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari user yang ingin diperbarui
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 description: Update your name
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: Update your email
 *                 example: johndoe@example.com
 *               role:
 *                 type: string
 *                 description: Update your role
 *                 example: ADMIN
 *     responses:
 *       200:
 *         description: User berhasil diperbarui
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID dari user yang diperbarui
 *                   example: 1
 *                 fullname:
 *                   type: string
 *                   description: Nama user yang diperbarui
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   description: Email user yang diperbarui
 *                   example: johndoe@example.com
 *                 role:
 *                   type: string
 *                   description: Peran user yang diperbarui
 *                   example: ADMIN
 *       404:
 *         description: User tidak ditemukan
 *
 *   delete:
 *     summary: Delete a user
 *     description: Menghapus user berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari user yang ingin dihapus
 *     responses:
 *       204:
 *         description: User berhasil dihapus
 *       404:
 *         description: User tidak ditemukan
 */
indexRouter.get("/user/:userId", authentication, userController.getUser);
indexRouter.delete("/user/:userId", userController.deleteUser);
indexRouter.put("/user/:userId", userController.updateUser);


// authRouter

// Register
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint untuk mendaftarkan user baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 description: Input your name
 *                 example: Moh Ryan Khalifatul Huda
 *               email:
 *                 type: string
 *                 description: Input your email
 *                 example: mohryan@gmail.com
 *               password:
 *                 type: string
 *                 description: Input your password
 *                 example: Optional
 *               role:
 *                 type: string
 *                 description: Input your role
 *                 example: USER
 *     responses:
 *       201:
 *         description: User berhasil didaftarkan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID dari user baru
 *                   example: 1
 *                 fullname:
 *                   type: string
 *                   description: Nama user
 *                   example: John Doe
 */
indexRouter.post("/register", authController.register);


//Login
/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Endpoint untuk login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Input your email
 *                 example: mohryan@gmail.com
 *               password:
 *                 type: string
 *                 description: Input your password
 *                 example: Optional 
 *     responses:
 *       200:
 *         description: Login berhasil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token autentikasi
 *                   example: jwt_token_example
 */
indexRouter.post("/login", authController.login);


/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Mengambil daftar semua produk
 *     responses:
 *       200:
 *         description: Berhasil mengambil daftar produk
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name_product:
 *                     type: string
 *                     description: Nama produk
 *                     example: Lenovo K14 G1 Core i3-1115G4 Gen 11 Ram 8gb Ssd 256gb Full HD
 *                   description:
 *                     type: string
 *                     description: Deskripsi produk
 *                     example: Laptop muda nih kak Processor Gen 11, dengan design elegan small frame 14 inch, dapat dibuka 180 derajat, dengan berat 1,5kg ringan dan simple dibawa kemana2 yah
 *                   price:
 *                     type: number
 *                     description: Harga produk
 *                     example: 6000000
 *                   stock:
 *                     type: integer
 *                     description: Jumlah stok
 *                     example: 100
 *                   image:
 *                     type: string
 *                     description: URL gambar produk
 *                     example: https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/8/15/8f3651af-cfb1-4eb4-8961-714e8e464fe9.jpg.webp?ect=4g
 */

indexRouter.get("/products", productController.getAllProduct);

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Get a product's information
 *     description: Mengambil data product berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari product yang ingin diambil
 *     responses:
 *       200:
 *         description: Berhasil mengambil data user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID user
 *                   example: 1
 *                 name_product:
 *                     type: string
 *                     description: Nama produk
 *                     example: Lenovo K14 G1 Core i3-1115G4 Gen 11 Ram 8gb Ssd 256gb Full HD
 *                 description:
 *                     type: string
 *                     description: Deskripsi produk
 *                     example: Laptop muda nih kak Processor Gen 11, dengan design elegan small frame 14 inch, dapat dibuka 180 derajat, dengan berat 1,5kg ringan dan simple dibawa kemana2 yah
 *                 price:
 *                     type: number
 *                     description: Harga produk
 *                     example: 6000000
 *                 stock:
 *                     type: integer
 *                     description: Jumlah stok
 *                     example: 100
 *                 image:
 *                     type: string
 *                     description: URL gambar produk
 *                     example: https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/8/15/8f3651af-cfb1-4eb4-8961-714e8e464fe9.jpg.webp?ect=4g
 *       404:
 *         description: User tidak ditemukan
*/
indexRouter.get("/product/:id", productController.getProduct);

//Create Product
/**
 * @swagger
 * /addproduct:
 *   post:
 *     summary: Add Product
 *     description: Endpoint untuk add Product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name_product:
 *                 type: string
 *                 description: Input name_product
 *                 example: Lenovo K14 G1 Core i3-1115G4 Gen 11 Ram 8gb Ssd 256gb Full HD
 *               description:
 *                 type: string
 *                 description: Input your description
 *                 example: Laptop muda nih kak Processor Gen 11, dengan design elegan small frame 14 inch, dapat dibuka 180 derajat, dengan berat 1,5kg ringan dan simple dibawa kemana2 yah
 *               price:
 *                 type: int
 *                 description: Input your price
 *                 example: 6000000
 *               stock:
 *                 type: int
 *                 description: Input your price
 *                 example: 100
 *               image:
 *                 type: int
 *                 description: Input your price
 *                 example: https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/8/15/8f3651af-cfb1-4eb4-8961-714e8e464fe9.jpg.webp?ect=4g
 *     responses:
 *       200:
 *         description: AddProduct berhasil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token autentikasi
 *                   example: jwt_token_example
*/
indexRouter.post("/addproduct", productController.createProduct);

indexRouter.get("/cart", cartController.getAllCart);
indexRouter.get("/cartitem", cartController.getAllCartItem);
indexRouter.delete("/cartdelete", cartController.deleteAllCartItem);
indexRouter.post("/addcart", cartController.createCart);
indexRouter.post("/cartitem", cartController.createCartItem);

export default indexRouter;
