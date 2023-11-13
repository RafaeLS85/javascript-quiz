import React from 'react';
import { Container } from "@chakra-ui/react";

export default function Layout({children}:{children: React.ReactNode}) {
    return (
        <main>
            <Container centerContent>
                {children}
            </Container>
        </main>
    )
}