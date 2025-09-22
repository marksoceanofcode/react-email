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
              Apple Event
            </Text>

            <Img
              className="w-full"
              src={`${baseUrl}/static/apple-sept-2025/hero_apple_event_september_2x.png`}
              alt="Apple September Event"
            />
          </Section>

          <Container className='px-8'>
            {/* <Heading className='font-bold text-center' as="h3">
              Recap
            </Heading> */}
            <Text className='font-semibold text-center text-xl'>
              Recap
            </Text>

            <Text className='font-normal text-base text-center'>
              Catch-up on all the latest from the September 2025 Apple event.<br/>
              Meet the new iPhone 17, iPhone 17 Pro,
              iPhone Air, Apple Watch, and Air Pods Pro.
            </Text>

            <Text className='text-center'>
              
            </Text>
          </Container>

          {/* Formatted with `rows` and `columns` */}
          <Section>
            <Row>
              <Column>Column 1, Row 1</Column>
              <Column>Column 2, Row 1</Column>
            </Row>
            <Row>
              <Column>Column 1, Row 2</Column>
              <Column>Column 2, Row 2</Column>
            </Row>
          </Section>
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
  padding: '20px 0 48px',
  marginBottom: '64px',
};
