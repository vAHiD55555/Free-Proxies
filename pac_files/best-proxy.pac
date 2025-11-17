function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.238.168.172:1011",
        "SOCKS 117.74.65.207:80",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 35.181.173.74:9443",
        "SOCKS 103.228.246.199:1111",
        "SOCKS 89.58.45.94:14949",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 93.182.26.66:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 222.59.173.105:44019",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 51.158.98.211:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}