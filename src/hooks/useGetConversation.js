import React, { useState } from 'react'

function useGetConversation() {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
}

export default useGetConversation
