import { SocialButton } from "@socialize-ui"
import { signIn } from "next-auth/react"

const Providers = ({providers}) => {
    
    return (
        providers.map(({id}) => {
            return (
                <SocialButton icon={id} size={'md'} variant={'primary'} key={`provider-${id}`} onClick={() => signIn(id, {callbackUrl: '/'})}/>
            )
        })
    )
}

export default Providers;