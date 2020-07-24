import FS from 'fs';
import PATH from 'path';
import {
    getProfileData, 
    getConsumerPath,
    getFollowerHashes,
} from './parsers';

function readFile(path) {
    return new Promise((resolve, reject) => {
        FS.readFile(path, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

let profileHtml;

describe('Testing parsers', () => {

    beforeAll(() => {
        return readFile(PATH.resolve(__dirname, './mocks/profile_response.html')).
            then(fileContent => {
                profileHtml = fileContent;
            });
    });

    it('Correct extraction of the user`s profile', () => {
        expect(profileHtml).toBeDefined();
        const profileData = getProfileData(profileHtml);
        expect(profileData.entry_data).toBeDefined();
        expect(profileData.hostname).toBe('www.instagram.com');
        const profilePage = profileData.entry_data.ProfilePage[0];
        expect(profilePage).toBeDefined();
        expect(profilePage.logging_page_id).toBe('profilePage_728874419');
        expect(profilePage.graphql.user.biography).toBeDefined();
        expect(profilePage.graphql.user.edge_followed_by.count).toBe(52);
        expect(profilePage.graphql.user.edge_follow.count).toBe(45);
        expect(profilePage.graphql.user.is_private).toBe(false);
        expect(profilePage.graphql.user.id).toBe('728874419');
        expect(profilePage.graphql.user.is_business_account).toBe(false);
        expect(profilePage.graphql.user.profile_pic_url).toBeDefined;

        // the edge_owner_to_timeline_media object contains user's content
        expect(profilePage.graphql.user.edge_owner_to_timeline_media.edges.length).toBe(12);
        expect(profilePage.graphql.user.username).toBe('leila.myosotis');
        expect(profilePage.graphql.user.connected_fb_page).toBe(null);
    }); 

    it('The Html page should contain a consumer reference', () => {
        const consumerPath = getConsumerPath(profileHtml);
        expect(consumerPath).toBe('/static/bundles/metro/Consumer.js/1a4c9bc277c3.js');
    });


    it('Extracting followers hashes', () => {
        return readFile(PATH.resolve(__dirname, './mocks/consumer.js')).
            then(code => {
                const res = getFollowerHashes(code);
                expect(res.join(' ')).toBe('c76146de99bb02f6415203be841dd25a d04b0a864b4b54837c0d870b0e77e076');
            });
    });
});

