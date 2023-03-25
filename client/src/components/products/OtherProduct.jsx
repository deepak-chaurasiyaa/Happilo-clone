import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Link,
  Rating,
  Box,
  Toolbar,
} from '@mui/material';

import ShoppingBanner from './ShoppingBanner';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00523b'),
  padding: '-20px !important',
  backgroundColor: '#00523b',
  '&:hover': {
    backgroundColor: 'black',
  },
}));

export default function OtherProduct({ Product, ShowBanner, MainTitle }) {
  return (
    <Box sx={{ width: '90%', margin: 'auto' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box></Box>
          <Box>
            <Typography variant='h5' className='main-title'>
              {MainTitle}
            </Typography>
          </Box>
          <Box></Box>
        </Toolbar>
      </Box>

      {ShowBanner && <ShoppingBanner />}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {Product &&
          Product.map((product) => {
            return (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea sx={{ width: 255 }}>
                  <CardMedia
                    component='img'
                    height='175'
                    image={product.product_img}
                    alt='green iguana'
                  />

                  <CardContent className='bg-pink'>
                    <Link className='link' href='#' underline='hover'>
                      {product.short_discription}
                    </Link>

                    <Rating
                      name='prooduct_customer_rating'
                      readOnly
                      value={product.prooduct_customer_rating}
                      precision={0.5}
                    />
                    <Typography className='selling-price'>
                      ₹ {product.product_selling_price}
                    </Typography>
                  </CardContent>

                  <ColorButton variant='contained' sx={{ width: '100%' }}>
                    {product.product_title}
                  </ColorButton>
                </CardActionArea>
              </Card>
            );
          })}
      </Box>
    </Box>
  );
}
