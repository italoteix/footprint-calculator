import { Container, Flex, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';

export const Header = () => (
  <Flex sx={{ position: 'sticky', top: '0', h: '88px', alignItems: 'center', bg: 'white' }}>
    <Container maxW='container.xl' px={3}>
      <Link as={RouterLink} to='/' display='inline-block'>
        <Image w='158px' objectFit='cover' src={logoImg} alt='South Pole' />
      </Link>
    </Container>
  </Flex>
);
