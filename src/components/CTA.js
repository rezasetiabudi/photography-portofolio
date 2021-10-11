import { 
  Stack, 
  Button,
} from '@chakra-ui/react'

import {
  ChatIcon,
  EmailIcon,
} from '@chakra-ui/icons'

export const CTA = () => {
  return (
    <Stack direction="row-reverse" spacing={4}>
      <Button rightIcon={<EmailIcon />} color="red.500" variant="solid">
        Email
      </Button>
      <Button rightIcon={<ChatIcon />} colorScheme="whatsapp" variant="solid">
        Whatsapp
      </Button>
    </Stack>
  )
}
