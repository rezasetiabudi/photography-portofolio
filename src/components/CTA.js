import { 
  Stack, 
  Button,
  Link
} from '@chakra-ui/react'

import {
  ChatIcon,
  EmailIcon,
} from '@chakra-ui/icons'

export const CTA = () => {
  return (
    <Stack direction="row-reverse" spacing={4}>
      <Link href="mailto:hellowsuff@gmail.com">
        <Button rightIcon={<EmailIcon />} color="red.500" variant="solid">
          Email
        </Button>
      </Link>
      <Link href="https://wa.me/6281214269123?text=Halo%20Wsuff%20Studio">
        <Button rightIcon={<ChatIcon />} colorScheme="whatsapp" variant="solid">
          Whatsapp
        </Button>
      </Link>
    </Stack>
  )
}
