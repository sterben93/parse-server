interface Push {

}

interface FileAdapter {

}

interface ParseServerValue {
    databaseURI: string;
    serverURL:string;
    cloud?: string;
    appId: string;
    fileKey?: string;
    masterKey: string;
    clientKey?: string;
    restAPIKey?: string;
    javascriptKey?: string;
    dotNetKey?: string;
    push?: Push;
    filesAdapter?: FileAdapter;
    oauth?: string;
}

interface consParse {
    new (ref: ParseServerValue);
}

declare var ParseServer: consParse

declare module "parse-server" {
    export = ParseServer;
}




