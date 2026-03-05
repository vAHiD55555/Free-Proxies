function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 141.11.42.163:1080",
        "SOCKS 206.123.156.223:6095",
        "SOCKS 43.208.16.199:30756",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 119.148.4.10:22122",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 103.172.42.125:1111",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 202.65.127.194:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 172.86.126.35:443",
        "SOCKS 103.74.192.243:7890",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 195.189.142.132:80",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 183.81.91.186:1073",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}