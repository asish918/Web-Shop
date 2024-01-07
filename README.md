<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href=" https://github.com/asish918/Web-Shop">
    <img src="readme_assets/logo.png" alt="Logo" width="30" height="30">
  </a>

<h3 align="center">Web Shop</h3>

  <p align="center">
    A fully functional E-Commerce site with its own custom CMS/Admin Dashboard that can pretty much configure anything for the storefront.
    <br />
    <br />
    <a href="https://web-shop-store-front.vercel.app/" target="_blank">Storefront</a>
    <br />
    <a href="https://web-shop-admin.vercel.app/" target="_blank">Admin Dashboard</a>
    <br />
    (You won't be able to use Admin Dashboard coz well I am the admin 😎)
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Storefront
![Product Name Screen Shot][product-screenshot1]
Admin Dashboard
![Product Name Screen Shot][product-screenshot2]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![Next][Next.js]
- ![React][React.js]
- ![Prisma][Prisma]
- ![Tailwind][Tailwind]
- ![ShadCn][ShadCn]
- ![Clerk][Clerk]
- ![MySQL][MySQL]
- ![Axios][Axios]
- ![Zod][Zod]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get respective API Keys/ URIs for Clerk(Authentication), Supabase(Postgres DB), Cloudinary(File Uploads). You need to set these up manually.
2. Clone the repo
   ```sh
   git clone  https://github.com/asish918/Web-Shop.git
   ```
3. Install NPM packages in both the folders separately
   ```sh
   npm install
   ```
4. Enter your API keys in `.env`. Refer the `.env.example` files in both the folders. Again you need to do this separatley.
5. Generate Prisma types and push to MongoDB
   ```sh
   npx prisma generate && npx prisma push
   ```
6. Refer to the `schema.prisma` file and try to create some dummy data to see actual results. Make sure the your Clerk, Cloudinary are configured correctly. Image URLs can be accessed from Cloudinary.
7. Change the `localhost` URLs both the envs accordingly.
8. Create a store as an admin and then use the store id in the `.env` of the storefront and append that to `..../api/_______`
9. Also use the same billboard ID in the file `store-front/app/(routes)/page.tsx` at line number `12`
10. Run admin server first and then the storefront

```sh
npm run dev
```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Database Schema

Refer to this visual schema to understand better
![Database Schema][db-schema]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information. Basically you can do whatever the hell you want to with the code 😉

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Asish Mahapatra - asishmahapatra918@gmail.com

Deployed on <br /> ![Vercel][Vercel]

Project Link: [ https://github.com/asish918/Web-Shop](https://github.com/asish918/Web-Shop)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]: https://img.shields.io/github/stars/asish918/Web-Shop.svg?style=for-the-badge
[stars-url]: https://github.com/asish918/NextJS/stargazers
[license-shield]: https://img.shields.io/github/license/asish918/Web-Shop.svg?style=for-the-badge
[license-url]: https://github.com/asish918/Web-Shop/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/asishmahapatra918
[product-screenshot1]: readme_assets/banner1.png
[product-screenshot2]: readme_assets/banner2.png
[db-schema]: readme_assets/schema.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Prisma]: https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Tailwind]: https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[ShadCn]: https://img.shields.io/badge/ShadCn-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white
[Clerk]: https://img.shields.io/badge/Clerk-3423A6?style=for-the-badge&logo=clerk&logoColor=6C47FF
[Axios]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[MySQL]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[Zod]: https://img.shields.io/badge/Zod_Validator-3E67B1?style=for-the-badge&logo=zod&logoColor=white
[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
