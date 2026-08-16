function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.82.68.249:1011",
        "SOCKS 104.154.186.48:80",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 154.37.221.222:10809",
        "SOCKS 8.215.15.163:8088",
        "SOCKS 198.12.95.178:1080",
        "SOCKS 80.66.72.152:888",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 47.91.120.190:9091",
        "SOCKS 91.210.171.169:9050",
        "SOCKS 5.249.165.195:20000",
        "SOCKS 185.212.47.95:8080",
        "SOCKS 144.31.152.129:1080",
        "SOCKS 77.110.103.146:1080",
        "SOCKS 8.213.222.157:1080",
        "SOCKS 109.172.55.177:1082",
        "SOCKS 194.87.147.132:1080",
        "SOCKS 92.118.234.124:1080",
        "SOCKS 109.164.35.23:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}