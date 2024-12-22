import React from 'react';
import Card from '../ui/Card';
import { TabsContent, TabsTrigger, TabsList, Tabs } from '../ui/tabs';
import EditProfile from '../edit-profile/EditProfile';
import { PreferencesSetting } from '../preferences-setting';
import { SecuritySetting } from '../security-setting';

const Setting: React.FC = () => {
  return (
    <Card
      aria-labelledby='settings-card'
      className='pb-10'
    >
      <Tabs defaultValue='edit-profile'>
        <TabsList>
          <TabsTrigger value='edit-profile'>Edit Profile</TabsTrigger>
          <TabsTrigger value='preferences'>Preferences</TabsTrigger>
          <TabsTrigger value='security'>Security</TabsTrigger>
        </TabsList>

        <TabsContent value='edit-profile'>
          <EditProfile />
        </TabsContent>

        <TabsContent value='preferences'>
          <PreferencesSetting />
        </TabsContent>

        <TabsContent value='security'>
          <SecuritySetting />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default Setting;
