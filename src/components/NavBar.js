import { MenuItem, MenuList } from '@mui/material';

const pages = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export default function NavBar() {
  return (
   
    <MenuList>
      {pages.map((page) => ( 
        <MenuItem key={page} sx={{ flexGrow: 1, display: { xs: 'inline-flex', md: 'inline-flex' } }}>
          {page}
        </MenuItem>
         ))}
      </MenuList>
  );
}
