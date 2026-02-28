function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.238.14.123:52663",
        "SOCKS 185.155.19.77:10808",
        "SOCKS 159.65.230.91:20508",
        "SOCKS 201.150.116.32:999",
        "SOCKS 64.176.34.132:5555",
        "SOCKS 90.188.224.98:1080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 47.82.66.142:1080",
        "SOCKS 203.189.137.214:1080",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 113.195.224.222:9999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}