function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.28.221.86:8082",
        "SOCKS 177.71.224.87:3128",
        "SOCKS 159.8.114.37:80",
        "SOCKS 177.19.167.242:80",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 103.190.113.123:8080",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 152.53.171.242:23798",
        "SOCKS 154.197.69.137:1081",
        "SOCKS 40.176.167.103:20000",
        "SOCKS 157.66.16.48:8181",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 202.142.178.206:1080",
        "SOCKS 154.197.69.137:1080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 110.235.248.81:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}