function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.80.163.194:46276",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 213.219.215.233:3128",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 5.9.218.168:3128",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 123.54.197.20:21159",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}