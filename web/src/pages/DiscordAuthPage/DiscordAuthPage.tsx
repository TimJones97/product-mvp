import { Redirect } from '@redwoodjs/router'
type DiscordAuthPageProps = {
  c_id?: string
  redir_url?: string
}

const DiscordAuthPage = ({ c_id, redir_url }: DiscordAuthPageProps) => {
  return (
    <Redirect
      to={`https://discord.com/api/oauth2/authorize?client_id=${c_id}&redirect_uri=${redir_url}&response_type=code&scope=identify`}
    />
  )
}

export default DiscordAuthPage
