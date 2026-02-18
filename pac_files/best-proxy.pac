function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.178.99.43:7302",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 200.59.186.178:999",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 123.54.197.19:21989",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 123.54.197.24:23545",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 90.84.188.97:8000",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 123.54.197.49:21647",
        "SOCKS 123.54.197.18:22775",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 103.54.57.117:50460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}