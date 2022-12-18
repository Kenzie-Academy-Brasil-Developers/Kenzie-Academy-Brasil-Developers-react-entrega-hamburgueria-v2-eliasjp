import { StyledInfoDiv, StyledInfoSection } from "./styled";

export function SiteInformation (){

    return (
        <>
            <StyledInfoSection>
                        <h1>Burger <span>Kenzie</span></h1>
                        <StyledInfoDiv>
                            <span className="material-symbols-outlined">shopping_bag</span>
                            <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
                        </StyledInfoDiv>
            </StyledInfoSection>
        </>
    )
}