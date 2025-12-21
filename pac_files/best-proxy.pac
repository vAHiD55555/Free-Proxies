function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.144.74.156:3620",
        "SOCKS 46.161.6.165:8080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 124.197.21.223:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 203.189.137.127:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 135.181.203.208:80",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 169.239.181.213:8888",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 115.127.112.34:1080",
        "SOCKS 8.142.3.145:3306",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}