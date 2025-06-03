import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Heading, Text, Lozenge } from '@forge/react';
import { invoke, view, requestJira } from '@forge/bridge';

const App = () => {

  const [theme, setTheme] = useState(null);
  const [accountID, setAccountID] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const getTheme = async () => {
      const context = await view.getContext();
      setTheme(context.theme.colorMode);
      setAccountID(context.accountId);
    }
    getTheme();
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      if (accountID) {
        const response = await requestJira(`/rest/api/2/user/search?accountId=${accountID}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });
        if (response.status === 200) {
          let data = await response.json();
          console.log(data);
          setName(data[0].displayName);
        } else {
          console.log(response)
        }
      } else {
        console.log("accountID is null")
      }
    }
    getUserInfo();
  }, [accountID]);


  const [data, setData] = useState(null);
  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);
  return (
    <>
      <Heading size="xlarge">Hello {name ? name: 'World'}!</Heading>
      <Text>{data ? data : 'Loading...'}</Text>
      <Text>Current theme: <Lozenge>{theme ? theme : 'Loading...'}</Lozenge></Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);