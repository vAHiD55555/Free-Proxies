function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.18:3927",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 123.128.12.93:9055",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 116.105.31.185:9100",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 47.245.117.43:80",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 54.215.46.91:20087",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}