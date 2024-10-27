import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // Get the login status
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      show: true,
    },
    {
      name: "Login",
      slug: "/login",
      show: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      show: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      show: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      show: authStatus,
    },
  ];

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container className='flex justify-between items-center'>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <ul className='flex'>
            {navItems.map((item) =>
              item.show ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
