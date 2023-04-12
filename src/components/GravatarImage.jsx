import Gravatar from 'react-gravatar';
export default function GravatarImage({email}) {
    return <Gravatar email={email} size={100} className="rounded-full shadow-lg border-2 border-primary w-10 h-10"/>
}