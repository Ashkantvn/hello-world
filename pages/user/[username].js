import{useRouter} from 'next/router';

const User = () =>{
    const router = useRouter();
    const {username} = router.query;
    console.log(router);
    return(
        <div>
            <h2>Hello {username} !</h2>
        </div>
    )
}
export default User;