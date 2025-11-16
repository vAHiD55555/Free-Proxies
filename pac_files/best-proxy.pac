function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.215.46.91:20087",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 13.211.233.22:17445",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 202.5.33.229:9108",
        "SOCKS 185.203.238.120:3128",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 116.98.50.140:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 89.58.45.94:29623",
        "SOCKS 54.199.199.66:2727",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 117.74.65.207:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}