import EditForm from '@/components/EditForm';
import {db} from '@/db';
import { notFound } from 'next/navigation';
interface EditPageProps {
    params: {
        id: string;
    };
}
export default async function EditPage(props:EditPageProps) {
    const id = parseInt(props.params.id);
    const snippet =await db.snippet.findFirst({
        where : { id }
    });
    if(!snippet) { notFound(); }
    return (
        <div>
            <EditForm {...snippet} />
        </div>
    );
}