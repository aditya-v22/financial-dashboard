import React from 'react';
import Card from '../components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { EditProfile } from '../components/edit-profile';
import { PreferencesSetting } from '../components/preferences-setting';
import { SecuritySetting } from '../components/security-setting';

const Settings: React.FC = () => {
  return (
    <div className='mx-10 my-[30px]'>
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
    </div>
  );
};

export default Settings;
