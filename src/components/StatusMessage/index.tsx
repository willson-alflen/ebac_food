import styled from 'styled-components'

const Container = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  padding: 2rem;
  color: var(--primary);
`

interface StatusMessageProps {
  children: React.ReactNode
}

const StatusMessage: React.FC<StatusMessageProps> = ({ children }) => (
  <Container role="status" aria-live="polite" aria-atomic="true">
    {children}
  </Container>
)

export default StatusMessage
