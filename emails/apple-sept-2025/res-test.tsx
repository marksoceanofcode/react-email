import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const StripeWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>
      Testing React.Email for email creation using React + Tailwind.
    </Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section>
            {/* <Heading className='font-bold text-center' as="h2">
              Apple Event<br/>
            </Heading> */}
            <Text className='font-bold text-center text-3xl'>
              Apple Event<br/>
              September 2025
            </Text>

            <Img
              className="max-w-96 mx-auto w-full"
              src={`${baseUrl}/static/apple-sept-2025/hero_apple_event_september_2x.png`}
              alt="Apple September Event"
            />
          </Section>

          <Container className='px-8'>
            {/* <Heading className='font-bold text-center' as="h3">
              Recap
            </Heading> */}
            {/* <Text className='font-semibold text-center text-2xl'>
              Recap
            </Text> */}

            <Text className='font-normal text-sm text-center'>
              Catch-up on all the latest from the September 2025 Apple event.<br/>
              Meet the new iPhone 17, iPhone 17 Pro,
              iPhone Air, Apple Watch Series 11, and Air Pods Pro 3.
            </Text>
          </Container>

          <Container className='font-semibold pt-8 text-center'>
            <Button
              href="https://apple.com"
              className='text-center text-white'
              style={btnOutline}
            >
              Explore
            </Button>
          </Container>
          
          
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default StripeWelcomeEmail;

const main = {
  backgroundColor: '#000000',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#000000',
  color: '#f5f5f7',
  margin: '0 auto',
  marginBottom: '32px',
  maxWidth: '600px',
  padding: '20px 0 48px',
};

const btnOutline = {
  border: '2px solid #ffffff',
  borderRadius: '24px',
  color: '#ffffff',
  padding: '12px 32px'
}