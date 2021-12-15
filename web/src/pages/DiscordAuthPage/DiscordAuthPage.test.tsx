import { render } from '@redwoodjs/testing/web'

import DiscordAuthPage from './DiscordAuthPage'

describe('DiscordAuthPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DiscordAuthPage />)
    }).not.toThrow()
  })
})
