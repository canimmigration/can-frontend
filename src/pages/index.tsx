import Head from "next/head";
import { Banner, Navbar, TagInfoGroups, SeasonalProjectGroups, NewsGroup, ProgramGroups, ServiceGroups, Consultation, AdvisoryGroups, ApprovalCases, Footer } from "../components";
import { ModalContext, ModalPortal, Toaster } from "../components/Toolkits";
import { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getPageNews } from "../services/facebook-api";

export const getStaticProps: GetStaticProps = async () => {
	try {
		return {
			props: { news: await getPageNews() },
		};
	} catch (err) {
		console.log("__getStaticProps error: ", err);
		return {
			props: { news: [] },
		};
	}
};

export default function Home({ news }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [modalComponent, setModalComponent] = useState<JSX.Element | null>(null);

	return (
		<>
			<Head>
				<title>CANIMMVN</title>
				<link
					rel="icon"
					type="image/svg+xml"
					sizes="any"
					href="/logo/logo_red.svg"
				/>
			</Head>
			<div className="w-full">
				<Navbar isDynamic={true} />
				<Banner />
				<TagInfoGroups />
				<SeasonalProjectGroups />
				<NewsGroup news={news} />
				<ProgramGroups />
				<ModalContext.Provider value={{ isOpenModal, handleOpenModal: setIsOpenModal, setModalComponent }}>
					<ServiceGroups />
				</ModalContext.Provider>
				<AdvisoryGroups />
				<ApprovalCases />
				<Consultation />
				<Footer />
				<div
					id="tool-kit"
					className="hidden text-white stroke-white stroke-strongPink mr-2"></div>
			</div>
			{isOpenModal ? <ModalPortal handleOpenModal={setIsOpenModal}>{modalComponent}</ModalPortal> : <></>}
			<Toaster />
		</>
	);
}
