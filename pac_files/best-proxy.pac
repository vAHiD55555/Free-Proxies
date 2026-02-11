function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.81.189.194:80",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 46.16.229.254:8079",
        "SOCKS 103.133.26.45:8080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 146.235.19.84:10852",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 123.54.197.20:23982",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 213.231.7.10:8282",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 80.76.34.133:8080",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 51.75.126.150:57328",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}