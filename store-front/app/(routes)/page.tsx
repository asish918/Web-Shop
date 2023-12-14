import Image from 'next/image'
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("6b0edb2c-c3dd-493b-a4a0-87c30ab6a9e8");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard
          data={billboard}
        />
      </div>
    </Container>
  )
};

export default HomePage;