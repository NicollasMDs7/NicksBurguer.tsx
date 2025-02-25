import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className=" bg-white py-4 bottom-0 fixed w-full  z-100">
      <div className="container mx-auto flex justify-center items-center ">
        <div className="w-[70%] flex justify-center items-center gap-8  border-2 border-black p-2 rounded-full sm:hidden">
          <div className="w-12 flex justify-center">
            <Link href="/menu">
              <img
                src="https://cdn-icons-png.flaticon.com/512/809/809564.png"
                alt="menu"
                className="cursor-pointer" // Opcional: adiciona o cursor de mão para indicar que é clicável
              />
            </Link>
          </div>

          <div className="w-12 flex justify-center ">
            <a
              href="https://wa.me/5511979686224?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20poderia%20me%20ajudar%3F"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/?size=64&id=16466&format=png"
                alt="whatsaap"
              />
            </a>
          </div>
          <div className="w-12 flex justify-center ">
            <a href="https://www.instagram.com/nick.s_burguer?igsh=dXFzZDk0emVqcWFt">
              <img
                src="https://static.vecteezy.com/ti/vetor-gratis/p1/8385736-instagram-social-media-icon-symbol-element-vector-illustration-gratis-vetor.jpg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
